// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmEmbedTaskRequestAudioControlMetadataControl extends $dara.Model {
  /**
   * @remarks
   * Whether enabled.
   * - **false**: Disabled.
   * 
   * - **true**: Enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Metadata in Base64 format. The string in the format AIGC={"Label":"1","ContentProducer":"AXXXX","ProduceID":"BXXXX","ReservedCode1":"CXXX","ContentPropagator":"DXXX","PropagateID":"EXXX","ReservedCode2":"FXXXX"} must be encoded into a Base64 string. Note: 1. The prefix "AIGC=" must be included; otherwise, the metadata cannot be added. Also note that this prefix differs from the one used for image metadata. 2. The Base64 encoding must follow the standard format and include padding.
   * 
   * @example
   * QUlHQz17IkxhYmVsIjoiMSIsIkNvbnRlbnRQcm9kdWNlciI6IkFYWFhYIiwiUHJvZHVjZUlEIjoiQlhYWFgsIlJlc2VydmVkQ29kZTEiOiJDWFhYIiwiQ29udGVudFByb3BhZ2F0b3IiOiJEWFhYIiwiUHJvcGFnYXRlSUQiOiJFWFhYIiwiUmVzZXJ2ZWRDb2RlMiI6IkZYWFhYIn0=
   */
  xmpKvBase64?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      xmpKvBase64: 'XmpKvBase64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      xmpKvBase64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestAudioControl extends $dara.Model {
  /**
   * @remarks
   * Audio metadata control parameters.
   */
  metadataControl?: CreateWmEmbedTaskRequestAudioControlMetadataControl;
  static names(): { [key: string]: string } {
    return {
      metadataControl: 'MetadataControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadataControl: CreateWmEmbedTaskRequestAudioControlMetadataControl,
    };
  }

  validate() {
    if(this.metadataControl && typeof (this.metadataControl as any).validate === 'function') {
      (this.metadataControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestCsvControl extends $dara.Model {
  /**
   * @remarks
   * Bit width of watermark information per UNIX timestamp. Specifies how many bits of information a single timestamp can carry. A larger value theoretically reduces the number of rows required to extract the information, but increases the magnitude of timestamp modification. The modification range is 2^n, where n is the value of this parameter.
   * 
   * @example
   * 2
   */
  embedBitsNumberInEachTime?: number;
  /**
   * @remarks
   * Specifies the column to embed into. It is recommended to use a string-type content column. Column counting starts from 1.
   * 
   * @example
   * 1
   */
  embedColumn?: number;
  /**
   * @remarks
   * Zero-width character watermark parameter. Embedding density, a floating-point number between 0 and 1. A value of 0 means embedding only in the first row, and 1 means embedding in all rows.
   * 
   * @example
   * 1
   */
  embedDensity?: string;
  /**
   * @remarks
   * Modification precision, indicating the scale of modification, expressed as 10^n. For example, 0 means a precision of 10^0 (units place), -1 means one decimal place, and 1 means the tens place. If a floating-point number lacks digits at the specified precision level, no modification is applied.
   * 
   * @example
   * -1
   */
  embedPrecision?: number;
  /**
   * @remarks
   * UNIX timestamp watermark parameter. Position where the watermark is embedded. Choose one of Min (minute), Sec (second), or MilSec (millisecond). The algorithm modifies the data at the selected position.
   * 
   * @example
   * Sec
   */
  embedTimePosition?: string;
  /**
   * @remarks
   * Watermark embedding mode.  
   * Values:  
   * 
   * - **lossless_row_shift_embed**: Lossless data method  
   * - **lossy_number_embed**: Lossy numeric method  
   * - **lossy_time_stamp_embed**: UNIX timestamp method  
   * - **lossy_zero_width_embed**: Zero-width character method
   * 
   * @example
   * lossy_zero_width_embed
   */
  method?: string;
  /**
   * @remarks
   * UNIX timestamp watermark parameter. The format string for parsing timestamps in the CSV file. For example, if the timestamp in the CSV file is similar to “2023-10-15 13:20:59:342”, the corresponding format string is “Year-Mon-Day Hour:Min:Sec.MilSec”. In this case, you must enter “Year-Mon-Day Hour:Min:Sec.MilSec” here. After watermark embedding, the output retains this format. If an incorrect format is provided, this method cannot be used. In the format string, year, month, day, hour, minute, second, and millisecond must follow the above notation. Connectors must be single non-alphanumeric English characters, typically “:”, “/”, “-”, or a space (“ ”). Additionally, “T” and “Z” are supported as connectors. Other timestamp formats are currently not supported for parsing.
   * 
   * @example
   * Hour:Min:Sec
   */
  timeFormat?: string;
  static names(): { [key: string]: string } {
    return {
      embedBitsNumberInEachTime: 'EmbedBitsNumberInEachTime',
      embedColumn: 'EmbedColumn',
      embedDensity: 'EmbedDensity',
      embedPrecision: 'EmbedPrecision',
      embedTimePosition: 'EmbedTimePosition',
      method: 'Method',
      timeFormat: 'TimeFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      embedBitsNumberInEachTime: 'number',
      embedColumn: 'number',
      embedDensity: 'string',
      embedPrecision: 'number',
      embedTimePosition: 'string',
      method: 'string',
      timeFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl extends $dara.Model {
  /**
   * @remarks
   * Transparency parameter for the background invisible watermark. Value range: 1–13. A higher value indicates less transparency.
   * 
   * @example
   * 10
   */
  opacity?: number;
  static names(): { [key: string]: string } {
    return {
      opacity: 'Opacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl extends $dara.Model {
  /**
   * @remarks
   * The counterclockwise rotation angle of the visible watermark text, in degrees. Valid values range from 1 to 360.
   * 
   * @example
   * 30
   */
  angle?: number;
  /**
   * @remarks
   * Color of the visible watermark text. Specified in 0xFFFFFF RGB format. For example, 0x000000 represents black.
   * 
   * @example
   * 0x000000
   */
  fontColor?: string;
  /**
   * @remarks
   * The font size of the visible watermark text. A larger value indicates a larger font.
   * 
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @remarks
   * This parameter takes effect only when Mode is set to repeat. It specifies the number of times the visible watermark repeats horizontally.
   * 
   * @example
   * 3
   */
  horizontalNumber?: number;
  /**
   * @remarks
   * Background visible watermark mode. Valid values:
   * 
   * - **pos**: Embeds a visible watermark text at a specific position in the background.
   * - **repeat**: Tiles multiple instances of the visible watermark text across the document background.
   * 
   * @example
   * pos
   */
  mode?: string;
  /**
   * @remarks
   * Transparency parameter for the visible watermark. Value range: 1–255. A higher value indicates less transparency.
   * 
   * @example
   * 100
   */
  opacity?: number;
  /**
   * @remarks
   * This parameter takes effect only when Mode is set to pos. It controls the horizontal position of the visible watermark, with the origin at the bottom-left corner. If the value is between 0 and 1, it represents a proportional position. If the value is greater than 1, it specifies an exact pixel position.
   * 
   * @example
   * 0.5
   */
  posX?: string;
  /**
   * @remarks
   * This parameter takes effect only when Mode is set to pos. It controls the vertical position of the visible watermark, with the origin at the bottom-left corner. If the value is between 0 and 1, it represents a proportional position. If the value is greater than 1, it specifies an exact pixel position.
   * 
   * @example
   * 0.5
   */
  posY?: string;
  /**
   * @remarks
   * Effective only when Mode is set to repeat. Specifies the Count of times the visible watermark repeats vertically.
   * 
   * @example
   * 3
   */
  verticalNumber?: number;
  /**
   * @remarks
   * Visible watermark text for the background. Formatted as a UTF-8 string.
   * 
   * @example
   * hello ****
   */
  visibleText?: string;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      horizontalNumber: 'HorizontalNumber',
      mode: 'Mode',
      opacity: 'Opacity',
      posX: 'PosX',
      posY: 'PosY',
      verticalNumber: 'VerticalNumber',
      visibleText: 'VisibleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      fontColor: 'string',
      fontSize: 'number',
      horizontalNumber: 'number',
      mode: 'string',
      opacity: 'number',
      posX: 'string',
      posY: 'string',
      verticalNumber: 'number',
      visibleText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControlBackgroundControl extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add an invisible background watermark. Valid values:
   * 
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * true
   */
  bgAddInvisible?: boolean;
  /**
   * @remarks
   * Specifies whether to enable visible background watermark. Valid values:
   * 
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * true
   */
  bgAddVisible?: boolean;
  /**
   * @remarks
   * Control parameters for the background invisible watermark.
   */
  bgInvisibleControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl;
  /**
   * @remarks
   * Parameters for controlling visible background watermarks.
   */
  bgVisibleControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl;
  static names(): { [key: string]: string } {
    return {
      bgAddInvisible: 'BgAddInvisible',
      bgAddVisible: 'BgAddVisible',
      bgInvisibleControl: 'BgInvisibleControl',
      bgVisibleControl: 'BgVisibleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgAddInvisible: 'boolean',
      bgAddVisible: 'boolean',
      bgInvisibleControl: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl,
      bgVisibleControl: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgVisibleControl,
    };
  }

  validate() {
    if(this.bgInvisibleControl && typeof (this.bgInvisibleControl as any).validate === 'function') {
      (this.bgInvisibleControl as any).validate();
    }
    if(this.bgVisibleControl && typeof (this.bgVisibleControl as any).validate === 'function') {
      (this.bgVisibleControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestDocumentControl extends $dara.Model {
  /**
   * @remarks
   * Background watermark control parameters.
   */
  backgroundControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControl;
  /**
   * @remarks
   * Specifies whether to enable widget invisible watermark. The widget invisible watermark can resist document insertion, deletion, modification, saving as (with unchanged format), and copying all content in a DOCX file and pasting it into a new DOCX document. It cannot resist format conversion attacks. Valid values:
   * 
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * true
   */
  invisibleAntiAllCopy?: boolean;
  /**
   * @remarks
   * Specifies whether to enable zero-width character invisible watermark. The zero-width character invisible watermark can resist document insertion, deletion, modification, saving as (with unchanged format), partial text copy and paste, and CopytoTxt attacks. It cannot resist format conversion to PDF attacks. Valid values:
   * 
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * true
   */
  invisibleAntiTextCopy?: boolean;
  static names(): { [key: string]: string } {
    return {
      backgroundControl: 'BackgroundControl',
      invisibleAntiAllCopy: 'InvisibleAntiAllCopy',
      invisibleAntiTextCopy: 'InvisibleAntiTextCopy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundControl: CreateWmEmbedTaskRequestDocumentControlBackgroundControl,
      invisibleAntiAllCopy: 'boolean',
      invisibleAntiTextCopy: 'boolean',
    };
  }

  validate() {
    if(this.backgroundControl && typeof (this.backgroundControl as any).validate === 'function') {
      (this.backgroundControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestImageControlLogoVisibleControlMargin extends $dara.Model {
  /**
   * @remarks
   * Effective only when Mode is set to bottom-left or bottom-right. Specifies the bottom margin.
   * 
   * @example
   * 0
   */
  bottom?: number;
  /**
   * @remarks
   * Effective only when Mode is set to top-left or bottom-left. Specifies the left margin.
   * 
   * @example
   * 0
   */
  left?: number;
  /**
   * @remarks
   * Effective only when Mode is set to top-right or bottom-right. Specifies the right margin.
   * 
   * @example
   * 0
   */
  right?: number;
  /**
   * @remarks
   * Effective only when Mode is set to top-left or top-right. Specifies the top margin.
   * 
   * @example
   * 0
   */
  top?: number;
  static names(): { [key: string]: string } {
    return {
      bottom: 'Bottom',
      left: 'Left',
      right: 'Right',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottom: 'number',
      left: 'number',
      right: 'number',
      top: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestImageControlLogoVisibleControl extends $dara.Model {
  /**
   * @remarks
   * Clockwise rotation angle of the logo watermark, in degrees. Value range: 1 to 360.
   * 
   * @example
   * 30
   */
  angle?: number;
  /**
   * @remarks
   * Specifies whether to enable enhanced visible watermarking. When enabled, the logo is processed so that embedded information can be extracted from it.
   * 
   * @example
   * false
   */
  enhance?: boolean;
  /**
   * @remarks
   * Base64-encoded logo watermark. The logo file is a PNG image converted to Base64 format.
   * 
   * @example
   * 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
   */
  logoBase64?: string;
  /**
   * @remarks
   * Effective only when Mode is set to top-left, top-right, bottom-left, or bottom-right. Specifies the margin.
   */
  margin?: CreateWmEmbedTaskRequestImageControlLogoVisibleControlMargin;
  /**
   * @remarks
   * Watermark display mode. Valid values:  
   * - **pos**: Fixed position mode.  
   * - **repeat**: Tile mode.  
   * - **top-left**: Top-left mode.  
   * - **top-right**: Top-right mode.  
   * - **bottom-left**: Bottom-left mode.  
   * - **bottom-right**: Bottom-right mode.
   * 
   * @example
   * pos
   */
  mode?: string;
  /**
   * @remarks
   * Opacity of the logo watermark. Value range: 1 to 255. A higher value indicates lower transparency.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * Horizontal anchor point of the logo watermark. Value range: 0 to 1. When (PosAx, PosAy) is (0, 0), the watermark is drawn with the top-left corner of the text as the anchor point; when the value is 0.5, it is drawn at the centroid of the text; when the value is (1, 1), it is drawn with the bottom-right corner of the text as the anchor point.
   * 
   * @example
   * 0
   */
  posAx?: number;
  /**
   * @remarks
   * Vertical anchor point of the logo watermark. Value range: 0 to 1. When (PosAx, PosAy) is (0, 0), the logo is drawn with the top-left corner of the text as the anchor point; when the value is 0.5, it is drawn at the centroid of the text; when the value is (1, 1), it is drawn with the bottom-right corner of the text as the anchor point.
   * 
   * @example
   * 0
   */
  posAy?: number;
  /**
   * @remarks
   * This parameter takes effect only when Mode is set to pos. It controls the horizontal position of the visible watermark, measured in pixels from the top-left corner as the origin.
   * 
   * @example
   * 0
   */
  posX?: number;
  /**
   * @remarks
   * This parameter takes effect only when Mode is set to pos. It controls the vertical position of the visible watermark, measured in pixels from the top-left corner as the origin.
   * 
   * @example
   * 0
   */
  posY?: number;
  /**
   * @remarks
   * This parameter takes effect only when Mode is set to repeat. It controls the horizontal pitch of the visible watermark tiling.
   * 
   * @example
   * 30
   */
  spaceX?: number;
  /**
   * @remarks
   * This parameter takes effect only when Mode is set to repeat. It controls the vertical pitch of the visible watermark tiling.
   * 
   * @example
   * 30
   */
  spaceY?: number;
  /**
   * @remarks
   * Visibility:
   * 
   * **true**: Display
   * 
   * **false**: Do not display
   * 
   * @example
   * true
   */
  visible?: boolean;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      enhance: 'Enhance',
      logoBase64: 'LogoBase64',
      margin: 'Margin',
      mode: 'Mode',
      opacity: 'Opacity',
      posAx: 'PosAx',
      posAy: 'PosAy',
      posX: 'PosX',
      posY: 'PosY',
      spaceX: 'SpaceX',
      spaceY: 'SpaceY',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      enhance: 'boolean',
      logoBase64: 'string',
      margin: CreateWmEmbedTaskRequestImageControlLogoVisibleControlMargin,
      mode: 'string',
      opacity: 'number',
      posAx: 'number',
      posAy: 'number',
      posX: 'number',
      posY: 'number',
      spaceX: 'number',
      spaceY: 'number',
      visible: 'boolean',
    };
  }

  validate() {
    if(this.margin && typeof (this.margin as any).validate === 'function') {
      (this.margin as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestImageControlMetadataControl extends $dara.Model {
  /**
   * @remarks
   * Whether to enable.
   * 
   * true: Display
   * 
   * false: Do not display
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Metadata in Base64 format. You must encode a string in the format AIGC:{"Label":"1","ContentProducer":"AXXXX","ProduceID":"BXXXX","ReservedCode1":"CXXX","ContentPropagator":"DXXX","PropagateID":"EXXX","ReservedCode2":"FXXXX"} into a Base64-encoded string. Note: 1. The prefix "AIGC:" must be included; otherwise, the metadata cannot be added. Also note that this format differs from that used for audio and video. 2. The Base64 encoding must follow the standard format and include padding as required.
   * 
   * @example
   * QUlHQzp7IkxhYmVsIjoiMSIsIkNvbnRlbnRQcm9kdWNlciI6IkFYWFhYIiwiUHJvZHVjZUlEIjoiQlhYWFgsIlJlc2VydmVkQ29kZTEiOiJDWFhYIiwiQ29udGVudFByb3BhZ2F0b3IiOiJEWFhYIiwiUHJvcGFnYXRlSUQiOiJFWFhYIiwiUmVzZXJ2ZWRDb2RlMiI6IkZYWFhYIn0=
   */
  xmpKvBase64?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      xmpKvBase64: 'XmpKvBase64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      xmpKvBase64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestImageControlTextVisibleControlMargin extends $dara.Model {
  /**
   * @remarks
   * Effective when Mode is bottom-left or bottom-right. Bottom margin.
   * 
   * @example
   * 0
   */
  bottom?: number;
  /**
   * @remarks
   * Effective only when Mode is top-left or bottom-left. Left margin.
   * 
   * @example
   * 0
   */
  left?: number;
  /**
   * @remarks
   * Effective only when Mode is top-right or bottom-right. Right margin.
   * 
   * @example
   * 0
   */
  right?: number;
  /**
   * @remarks
   * Effective only when Mode is top-left or top-right. Top margin.
   * 
   * @example
   * 0
   */
  top?: number;
  static names(): { [key: string]: string } {
    return {
      bottom: 'Bottom',
      left: 'Left',
      right: 'Right',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottom: 'number',
      left: 'number',
      right: 'number',
      top: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestImageControlTextVisibleControl extends $dara.Model {
  /**
   * @remarks
   * Clockwise rotation angle of the text watermark, in degrees. The value range is 0 to 360.
   * 
   * @example
   * 30
   */
  angle?: number;
  /**
   * @remarks
   * Text color of the text watermark. The format is 0xFFFFFF or #FFFFFF RGB color format. For example, 0x000000 or #000000 represents black.
   * 
   * @example
   * #FF0000
   */
  fontColor?: string;
  /**
   * @remarks
   * Font size of the text watermark. A larger value indicates a larger font.
   * 
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @remarks
   * Effective only when Mode is top-left, top-right, bottom-left, or bottom-right. Margin.
   */
  margin?: CreateWmEmbedTaskRequestImageControlTextVisibleControlMargin;
  /**
   * @remarks
   * Text watermark display mode. Valid values:
   * - **pos**: fixed position mode.
   * - **repeat**: tile mode.
   * - **top-left**: top-left mode.
   * - **top-right**: top-right mode.
   * - **bottom-left**: bottom-left mode.
   * - **bottom-right**: bottom-right mode.
   * 
   * @example
   * pos
   */
  mode?: string;
  /**
   * @remarks
   * Opacity of the text watermark. Valid values: 1 to 255. A larger value indicates less transparency.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * Horizontal anchor point of the text watermark.  
   * The value range is 0 to 1. When (PosAx, PosAy) is (0, 0), the text is drawn with its top-left corner as the anchor point; when the value is 0.5, the text is drawn with its centroid as the anchor point; when the value is (1, 1), the text is drawn with its bottom-right corner as the anchor point.
   * 
   * @example
   * 0
   */
  posAx?: number;
  /**
   * @remarks
   * Vertical anchor point of the text watermark.  
   * Valid range: 0 to 1. When (PosAx, PosAy) is (0, 0), the text is drawn with its top-left corner as the anchor point; when the value is 0.5, the text is drawn centered at its centroid; when the value is (1, 1), the text is drawn with its bottom-right corner as the anchor point.
   * 
   * @example
   * 0
   */
  posAy?: number;
  /**
   * @remarks
   * Takes effect when Mode is pos. Specifies the horizontal position of the text watermark, using pixel coordinates with the origin at the top-left corner.
   * 
   * @example
   * 0
   */
  posX?: number;
  /**
   * @remarks
   * Takes effect when Mode is pos. Specifies the vertical position of the text watermark, using pixel coordinates with the origin at the top-left corner.
   * 
   * @example
   * 0
   */
  posY?: number;
  /**
   * @remarks
   * This parameter takes effect only when Mode is set to repeat. It controls the horizontal pitch of the tiled text watermark.
   * 
   * @example
   * 30
   */
  spaceX?: number;
  /**
   * @remarks
   * This parameter takes effect only when Mode is set to repeat. It controls the vertical pitch of the tiled text watermark.
   * 
   * @example
   * 0
   */
  spaceY?: number;
  /**
   * @remarks
   * Visibility:  
   * 
   * true: Display  
   * 
   * false: Do not display
   * 
   * @example
   * true
   */
  visible?: boolean;
  /**
   * @remarks
   * Content of the text watermark. The format is a UTF-8 string.
   * 
   * @example
   * 水印文本
   */
  visibleText?: string;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      margin: 'Margin',
      mode: 'Mode',
      opacity: 'Opacity',
      posAx: 'PosAx',
      posAy: 'PosAy',
      posX: 'PosX',
      posY: 'PosY',
      spaceX: 'SpaceX',
      spaceY: 'SpaceY',
      visible: 'Visible',
      visibleText: 'VisibleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      fontColor: 'string',
      fontSize: 'number',
      margin: CreateWmEmbedTaskRequestImageControlTextVisibleControlMargin,
      mode: 'string',
      opacity: 'number',
      posAx: 'number',
      posAy: 'number',
      posX: 'number',
      posY: 'number',
      spaceX: 'number',
      spaceY: 'number',
      visible: 'boolean',
      visibleText: 'string',
    };
  }

  validate() {
    if(this.margin && typeof (this.margin as any).validate === 'function') {
      (this.margin as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestImageControl extends $dara.Model {
  /**
   * @remarks
   * Logo watermark control parameters.
   */
  logoVisibleControl?: CreateWmEmbedTaskRequestImageControlLogoVisibleControl;
  /**
   * @remarks
   * Metadata control parameters. Takes effect when WmType is PureImage or AigcImage.
   */
  metadataControl?: CreateWmEmbedTaskRequestImageControlMetadataControl;
  /**
   * @remarks
   * Text watermark control parameters for images.
   */
  textVisibleControl?: CreateWmEmbedTaskRequestImageControlTextVisibleControl;
  static names(): { [key: string]: string } {
    return {
      logoVisibleControl: 'LogoVisibleControl',
      metadataControl: 'MetadataControl',
      textVisibleControl: 'TextVisibleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoVisibleControl: CreateWmEmbedTaskRequestImageControlLogoVisibleControl,
      metadataControl: CreateWmEmbedTaskRequestImageControlMetadataControl,
      textVisibleControl: CreateWmEmbedTaskRequestImageControlTextVisibleControl,
    };
  }

  validate() {
    if(this.logoVisibleControl && typeof (this.logoVisibleControl as any).validate === 'function') {
      (this.logoVisibleControl as any).validate();
    }
    if(this.metadataControl && typeof (this.metadataControl as any).validate === 'function') {
      (this.metadataControl as any).validate();
    }
    if(this.textVisibleControl && typeof (this.textVisibleControl as any).validate === 'function') {
      (this.textVisibleControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestVideoControlMetadataControl extends $dara.Model {
  /**
   * @remarks
   * Whether enabled.
   * - **false**: Disabled.
   * - **true**: Enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Metadata in Base64 format. The string in the format AIGC={"Label":"1","ContentProducer":"AXXXX","ProduceID":"BXXXX","ReservedCode1":"CXXX","ContentPropagator":"DXXX","PropagateID":"EXXX","ReservedCode2":"FXXXX"} must be encoded into a Base64 string. Note: 1. The prefix "AIGC=" must be included; otherwise, the metadata cannot be added. Also note that this prefix differs from the one used for image metadata. 2. Base64 must be in standard format and include padding.
   * 
   * @example
   * QUlHQz17IkxhYmVsIjoiMSIsIkNvbnRlbnRQcm9kdWNlciI6IkFYWFhYIiwiUHJvZHVjZUlEIjoiQlhYWFgsIlJlc2VydmVkQ29kZTEiOiJDWFhYIiwiQ29udGVudFByb3BhZ2F0b3IiOiJEWFhYIiwiUHJvcGFnYXRlSUQiOiJFWFhYIiwiUmVzZXJ2ZWRDb2RlMiI6IkZYWFhYIn0=
   */
  xmpKvBase64?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      xmpKvBase64: 'XmpKvBase64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      xmpKvBase64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestVideoControlTextVisibleControlMargin extends $dara.Model {
  /**
   * @remarks
   * Bottom margin. Takes effect only when Mode is set to bottom-left or bottom-right.
   * 
   * @example
   * 10
   */
  bottom?: number;
  /**
   * @remarks
   * Right margin. Takes effect only when Mode is set to top-right or bottom-right.
   * 
   * @example
   * 10
   */
  right?: number;
  static names(): { [key: string]: string } {
    return {
      bottom: 'Bottom',
      right: 'Right',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottom: 'number',
      right: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestVideoControlTextVisibleControl extends $dara.Model {
  /**
   * @remarks
   * Text color of the text watermark. Format: 0xFFFFFF or #FFFFFF (RGB color format).
   * 
   * @example
   * #FF0000
   */
  fontColor?: string;
  /**
   * @remarks
   * Font size. Valid values: **0** to **72**.
   * 
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @remarks
   * Margin. Takes effect only when Mode is set to top-left, top-right, bottom-left, or bottom-right.
   */
  margin?: CreateWmEmbedTaskRequestVideoControlTextVisibleControlMargin;
  /**
   * @remarks
   * Text watermark display mode. Valid values:
   * - **pos**: Fixed position with the origin at the top-left corner.
   * - **bottom-right**: Bottom-right mode.
   * 
   * @example
   * bottom-right
   */
  mode?: string;
  /**
   * @remarks
   * Text watermark transparency. Value range: 1 to 255. A higher value indicates less transparency.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * Effective only when Mode is "pos". Specifies the horizontal position of the visible watermark, with the origin at the top-left corner, in pixels.
   * 
   * @example
   * 10
   */
  posX?: number;
  /**
   * @remarks
   * Effective only when Mode is "pos". Specifies the vertical position of the visible watermark, with the origin at the top-left corner, in pixels.
   * 
   * @example
   * 10
   */
  posY?: number;
  /**
   * @remarks
   * Visibility:
   * 
   * true: Display
   * 
   * false: Do not display
   * 
   * @example
   * True
   */
  visible?: boolean;
  /**
   * @remarks
   * Text watermark content. The format is a UTF-8 string.
   * 
   * @example
   * 水印测试
   */
  visibleText?: string;
  static names(): { [key: string]: string } {
    return {
      fontColor: 'FontColor',
      fontSize: 'FontSize',
      margin: 'Margin',
      mode: 'Mode',
      opacity: 'Opacity',
      posX: 'PosX',
      posY: 'PosY',
      visible: 'Visible',
      visibleText: 'VisibleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fontColor: 'string',
      fontSize: 'number',
      margin: CreateWmEmbedTaskRequestVideoControlTextVisibleControlMargin,
      mode: 'string',
      opacity: 'number',
      posX: 'number',
      posY: 'number',
      visible: 'boolean',
      visibleText: 'string',
    };
  }

  validate() {
    if(this.margin && typeof (this.margin as any).validate === 'function') {
      (this.margin as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequestVideoControl extends $dara.Model {
  /**
   * @remarks
   * Metadata control parameters.
   */
  metadataControl?: CreateWmEmbedTaskRequestVideoControlMetadataControl;
  /**
   * @remarks
   * Video text watermark control parameters.
   */
  textVisibleControl?: CreateWmEmbedTaskRequestVideoControlTextVisibleControl;
  static names(): { [key: string]: string } {
    return {
      metadataControl: 'MetadataControl',
      textVisibleControl: 'TextVisibleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadataControl: CreateWmEmbedTaskRequestVideoControlMetadataControl,
      textVisibleControl: CreateWmEmbedTaskRequestVideoControlTextVisibleControl,
    };
  }

  validate() {
    if(this.metadataControl && typeof (this.metadataControl as any).validate === 'function') {
      (this.metadataControl as any).validate();
    }
    if(this.textVisibleControl && typeof (this.textVisibleControl as any).validate === 'function') {
      (this.textVisibleControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmEmbedTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Audio control parameters.
   */
  audioControl?: CreateWmEmbedTaskRequestAudioControl;
  /**
   * @remarks
   * CSV watermark embedding control parameters.
   */
  csvControl?: CreateWmEmbedTaskRequestCsvControl;
  /**
   * @remarks
   * Document watermark control parameters.
   */
  documentControl?: CreateWmEmbedTaskRequestDocumentControl;
  /**
   * @remarks
   * URL for downloading the file to embed. The URL must support public network access.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/abc****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * The filename of the file to embed. The backend validates the file type based on the filename extension.
   * 
   * This parameter is required.
   * 
   * @example
   * abc****.pdf
   */
  filename?: string;
  /**
   * @remarks
   * Image watermark control parameters.
   */
  imageControl?: CreateWmEmbedTaskRequestImageControl;
  /**
   * @remarks
   * Image watermark parameter: the desired JPEG compression quality factor for the output image. Default value is 95. Valid range: 1 to 100.
   * 
   * @example
   * 95
   */
  imageEmbedJpegQuality?: number;
  /**
   * @remarks
   * Image watermark parameter: A higher value indicates greater robustness but reduced visual quality. Default value: 2. Valid values: 0 to 4.
   * 
   * @example
   * 2
   */
  imageEmbedLevel?: number;
  /**
   * @remarks
   * Specifies whether to enable invisible watermark embedding. Default value: true.  
   * Valid values:  
   * - **true**: Yes  
   * - **false**: No
   */
  invisibleEnable?: boolean;
  /**
   * @remarks
   * Short video watermark parameter: specifies the video bitrate. By default, the video bitrate is automatically retrieved. You can use this parameter to explicitly specify the bitrate used during extraction. This parameter usually does not need to be set.
   * 
   * @example
   * 3000k
   */
  videoBitrate?: string;
  /**
   * @remarks
   * Video control parameters.
   */
  videoControl?: CreateWmEmbedTaskRequestVideoControl;
  /**
   * @remarks
   * Video watermark parameter: whether to use the long-video watermark software development kit (SDK). The default value is false. Valid values:
   * 
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @remarks
   * Base64-encoded string-formatted watermark information. If this value is set, WmInfoUint cannot be set.
   * 
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @remarks
   * The bit width of the watermark information. The default value is 32. This parameter must be consistent between embedding and extraction. For example, if a 40-bit software development kit (SDK) is used for embedding, this value must also be set to 40 during extraction.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * Watermark information in decimal numeric format. If this parameter is set, WmInfoBytesB64 cannot be set.  
   * 
   * The valid value range depends on the WmInfoSize parameter:  
   * 
   * - When WmInfoSize is 32, the value range is 1 to 4294967295.  
   * 
   * - When WmInfoSize is 40, the value range is 1 to 1099511627775.  
   * 
   * - When WmInfoSize is 64, the value range is 1 to 18446744073709551615.
   * 
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * Watermark type. Valid values:  
   * - **PureDocument**: Document watermark.  
   * - **PureImage**: Image watermark.  
   * - **PureAudio**: Audio watermark.  
   * - **PureVideo**: Video watermark.  
   * - **AigcDocument**: AIGC document watermark.  
   * - **AigcImage**: AIGC image watermark.  
   * - **AigcAudio**: AIGC audio watermark.  
   * - **AigcVideo**: AIGC video watermark.
   * 
   * This parameter is required.
   * 
   * @example
   * PureDocument
   */
  wmType?: string;
  static names(): { [key: string]: string } {
    return {
      audioControl: 'AudioControl',
      csvControl: 'CsvControl',
      documentControl: 'DocumentControl',
      fileUrl: 'FileUrl',
      filename: 'Filename',
      imageControl: 'ImageControl',
      imageEmbedJpegQuality: 'ImageEmbedJpegQuality',
      imageEmbedLevel: 'ImageEmbedLevel',
      invisibleEnable: 'InvisibleEnable',
      videoBitrate: 'VideoBitrate',
      videoControl: 'VideoControl',
      videoIsLong: 'VideoIsLong',
      wmInfoBytesB64: 'WmInfoBytesB64',
      wmInfoSize: 'WmInfoSize',
      wmInfoUint: 'WmInfoUint',
      wmType: 'WmType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioControl: CreateWmEmbedTaskRequestAudioControl,
      csvControl: CreateWmEmbedTaskRequestCsvControl,
      documentControl: CreateWmEmbedTaskRequestDocumentControl,
      fileUrl: 'string',
      filename: 'string',
      imageControl: CreateWmEmbedTaskRequestImageControl,
      imageEmbedJpegQuality: 'number',
      imageEmbedLevel: 'number',
      invisibleEnable: 'boolean',
      videoBitrate: 'string',
      videoControl: CreateWmEmbedTaskRequestVideoControl,
      videoIsLong: 'boolean',
      wmInfoBytesB64: 'string',
      wmInfoSize: 'number',
      wmInfoUint: 'string',
      wmType: 'string',
    };
  }

  validate() {
    if(this.audioControl && typeof (this.audioControl as any).validate === 'function') {
      (this.audioControl as any).validate();
    }
    if(this.csvControl && typeof (this.csvControl as any).validate === 'function') {
      (this.csvControl as any).validate();
    }
    if(this.documentControl && typeof (this.documentControl as any).validate === 'function') {
      (this.documentControl as any).validate();
    }
    if(this.imageControl && typeof (this.imageControl as any).validate === 'function') {
      (this.imageControl as any).validate();
    }
    if(this.videoControl && typeof (this.videoControl as any).validate === 'function') {
      (this.videoControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


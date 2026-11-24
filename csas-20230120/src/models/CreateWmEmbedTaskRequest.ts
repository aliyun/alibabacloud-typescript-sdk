// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmEmbedTaskRequestAudioControlMetadataControl extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the metadata. Valid values:
   * - **false**: Disabled.
   * - **true**: Enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The Base64-encoded metadata. You must encode a string in the format of AIGC={"Label":"1","ContentProducer":"AXXXX","ProduceID":"BXXXX","ReservedCode1":"CXXX","ContentPropagator":"DXXX","PropagateID":"EXXX","ReservedCode2":"FXXXX"} into a Base64 string. Note: 1. The "AIGC=" prefix is required. Otherwise, the metadata cannot be added. Note that the prefix is different from that of image metadata. 2. The Base64 string must be in the standard format and include padding.
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
   * The audio metadata control parameters.
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
   * The bit width of the timestamp watermark information, which specifies how much information a single timestamp can hold. A larger value theoretically requires fewer rows to extract the information, but the time modification magnitude increases. The magnitude range is the nth power of 2, where n is the value of this parameter.
   * 
   * @example
   * 2
   */
  embedBitsNumberInEachTime?: number;
  /**
   * @remarks
   * The specified embedding column. We recommend that you use a string content column. The count starts from 1.
   * 
   * @example
   * 1
   */
  embedColumn?: number;
  /**
   * @remarks
   * The zero-width character watermark parameter that specifies the embedding density. The value is a floating-point number between 0 and 1. A value of 0 indicates that only the first row is embedded. A value of 1 indicates that all rows are embedded.
   * 
   * @example
   * 1
   */
  embedDensity?: string;
  /**
   * @remarks
   * The modification precision, which indicates the modification magnitude as the nth power of 10. For example, 0 indicates a modification precision of 10^0, which is the ones place. -1 indicates the first decimal place. 1 indicates the tens place. If the float data does not have this precision part, it is not modified.
   * 
   * @example
   * -1
   */
  embedPrecision?: number;
  /**
   * @remarks
   * The timestamp watermark parameter that specifies the watermark embedding position. Valid values: Min (minute), Sec (second), and MilSec (millisecond). You can specify only one of them. The algorithm modifies the data at the specified position.
   * 
   * @example
   * Sec
   */
  embedTimePosition?: string;
  /**
   * @remarks
   * The watermark embedding method. Valid values:
   * 
   * - **lossless_row_shift_embed**: Lossless data method.
   * - **lossy_number_embed**: Lossy data method.
   * - **lossy_time_stamp_embed**: Timestamp method.
   * - **lossy_zero_width_embed**: Zero-width character method.
   * 
   * @example
   * lossy_zero_width_embed
   */
  method?: string;
  /**
   * @remarks
   * The timestamp watermark parameter that specifies the format string for parsing timestamps in the CSV file. For example, if the timestamp in the CSV file is similar to "2023-10-15 13:20:59:342", the corresponding format string is "Year-Mon-Day Hour:Min:Sec.MilSec". You must enter "Year-Mon-Day Hour:Min:Sec.MilSec" here. After the watermark is embedded, the output still follows this format. If you enter it incorrectly, this method cannot be used. The year, month, day, hour, minute, second, and millisecond in the format string must be written as described above. The connector must be a single non-character English connector, which can generally be ":", "/", "-", or " " (space). "T" and "Z" are also supported as connectors. Other time formats are not supported for parsing.
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
   * The opacity parameter of the invisible background watermark. Valid values: 1 to 13. A larger value indicates lower transparency.
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
   * The counterclockwise rotation angle of the visible watermark text. Valid values: 1 to 360.
   * 
   * @example
   * 30
   */
  angle?: number;
  /**
   * @remarks
   * The color of the visible watermark text. The format is 0xFFFFFF RGB color format. For example, 0x000000 indicates black.
   * 
   * @example
   * 0x000000
   */
  fontColor?: string;
  /**
   * @remarks
   * The font size of the visible watermark text. A larger value indicates a larger font size.
   * 
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @remarks
   * This parameter takes effect when Mode is set to repeat. The number of times the visible watermark repeats horizontally.
   * 
   * @example
   * 3
   */
  horizontalNumber?: number;
  /**
   * @remarks
   * The visible background watermark mode. Valid values:
   * 
   * - **pos**: Embeds a single visible watermark text at a specific position in the background.
   * - **repeat**: Tiles and embeds multiple visible watermark texts in the document background.
   * 
   * @example
   * pos
   */
  mode?: string;
  /**
   * @remarks
   * The opacity parameter of the visible watermark. Valid values: 1 to 255. A larger value indicates lower transparency.
   * 
   * @example
   * 100
   */
  opacity?: number;
  /**
   * @remarks
   * This parameter takes effect when Mode is set to pos. The parameter that controls the horizontal position of the visible watermark, with the lower-left corner as the origin. When the value is between 0 and 1, it controls the position by proportion. When the value is greater than 1, it controls the exact pixel position.
   * 
   * @example
   * 0.5
   */
  posX?: string;
  /**
   * @remarks
   * This parameter takes effect when Mode is set to pos. The parameter that controls the vertical position of the visible watermark, with the lower-left corner as the origin. When the value is between 0 and 1, it controls the position by proportion. When the value is greater than 1, it controls the exact pixel position.
   * 
   * @example
   * 0.5
   */
  posY?: string;
  /**
   * @remarks
   * This parameter takes effect when Mode is set to repeat. The number of times the visible watermark repeats vertically.
   * 
   * @example
   * 3
   */
  verticalNumber?: number;
  /**
   * @remarks
   * The text of the visible background watermark. The format is a UTF-8 string.
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
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  bgAddInvisible?: boolean;
  /**
   * @remarks
   * Specifies whether to enable visible background watermarks. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  bgAddVisible?: boolean;
  /**
   * @remarks
   * The invisible background watermark control parameters.
   */
  bgInvisibleControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControlBgInvisibleControl;
  /**
   * @remarks
   * The visible background watermark control parameters.
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
   * The background watermark control parameters.
   */
  backgroundControl?: CreateWmEmbedTaskRequestDocumentControlBackgroundControl;
  /**
   * @remarks
   * Specifies whether to enable component invisible watermarks. Component invisible watermarks can resist document addition, deletion, modification, saving as another format (without changing the format), and selecting all and copying to a new docx document. They cannot resist format conversion attacks. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  invisibleAntiAllCopy?: boolean;
  /**
   * @remarks
   * Specifies whether to enable zero-width character invisible watermarks. Zero-width character invisible watermarks can resist document addition, deletion, modification, saving as another format (without changing the format), partial text copy and paste, and CopytoTxt attacks. They cannot resist format conversion to PDF attacks. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
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
   * The bottom margin. This parameter takes effect only when Mode is set to bottom-left or bottom-right.
   * 
   * @example
   * 0
   */
  bottom?: number;
  /**
   * @remarks
   * The left margin. This parameter takes effect only when Mode is set to top-left or bottom-left.
   * 
   * @example
   * 0
   */
  left?: number;
  /**
   * @remarks
   * The right margin. This parameter takes effect only when Mode is set to top-right or bottom-right.
   * 
   * @example
   * 0
   */
  right?: number;
  /**
   * @remarks
   * The top margin. This parameter takes effect only when Mode is set to top-left or top-right.
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
   * The clockwise rotation angle of the logo watermark. Valid values: 1 to 360.
   * 
   * @example
   * 30
   */
  angle?: number;
  /**
   * @remarks
   * Specifies whether to enable the enhanced visible watermark. After this feature is enabled, the logo is processed, and the embedded information in the logo can be extracted.
   * 
   * @example
   * false
   */
  enhance?: boolean;
  /**
   * @remarks
   * The Base64-encoded logo watermark. The logo file must be a PNG image encoded in Base64 format.
   * 
   * @example
   * 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
   */
  logoBase64?: string;
  /**
   * @remarks
   * The margin of the text watermark. This parameter takes effect only when Mode is set to top-left, top-right, bottom-left, or bottom-right.
   */
  margin?: CreateWmEmbedTaskRequestImageControlLogoVisibleControlMargin;
  /**
   * @remarks
   * The display mode of the logo watermark. Valid values:
   * - **pos**: Fixed position mode.
   * - **repeat**: Tiled mode.
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
   * The opacity of the logo watermark. Valid values: 1 to 255. A larger value indicates lower transparency.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * The horizontal anchor point of the logo watermark. Valid values: 0 to 1. If PosAx and PosAy are both set to 0, the top-left corner of the logo is used as the anchor point. If the value is 0.5, the center of the logo is used as the anchor point. If PosAx and PosAy are both set to 1, the bottom-right corner of the logo is used as the anchor point.
   * 
   * @example
   * 0
   */
  posAx?: number;
  /**
   * @remarks
   * The vertical anchor point of the logo watermark. Valid values: 0 to 1. If PosAx and PosAy are both set to 0, the top-left corner of the logo is used as the anchor point. If the value is 0.5, the center of the logo is used as the anchor point. If PosAx and PosAy are both set to 1, the bottom-right corner of the logo is used as the anchor point.
   * 
   * @example
   * 0
   */
  posAy?: number;
  /**
   * @remarks
   * The horizontal position of the visible watermark. This parameter takes effect only when Mode is set to pos. The value is the pixel position with the top-left corner as the origin.
   * 
   * @example
   * 0
   */
  posX?: number;
  /**
   * @remarks
   * The vertical position of the visible watermark. This parameter takes effect only when Mode is set to pos. The value is the pixel position with the top-left corner as the origin.
   * 
   * @example
   * 0
   */
  posY?: number;
  /**
   * @remarks
   * The horizontal spacing of the tiled visible watermark. This parameter takes effect only when Mode is set to repeat.
   * 
   * @example
   * 30
   */
  spaceX?: number;
  /**
   * @remarks
   * The vertical spacing of the tiled visible watermark. This parameter takes effect only when Mode is set to repeat.
   * 
   * @example
   * 30
   */
  spaceY?: number;
  /**
   * @remarks
   * Specifies whether the logo watermark is visible. Valid values:
   * - **true**: Visible.
   * - **false**: Invisible.
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
   * Specifies whether to enable the metadata. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The Base64-encoded metadata. You must encode a string in the format of AIGC:{"Label":"1","ContentProducer":"AXXXX","ProduceID":"BXXXX","ReservedCode1":"CXXX","ContentPropagator":"DXXX","PropagateID":"EXXX","ReservedCode2":"FXXXX"} into a Base64 string. Note: 1. The "AIGC:" prefix is required. Otherwise, the metadata cannot be added. Note that the format is different from that of audio and video. 2. The Base64 string must be in the standard format and include padding.
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
   * The bottom margin. This parameter takes effect only when Mode is set to bottom-left or bottom-right.
   * 
   * @example
   * 0
   */
  bottom?: number;
  /**
   * @remarks
   * The left margin. This parameter takes effect only when Mode is set to top-left or bottom-left.
   * 
   * @example
   * 0
   */
  left?: number;
  /**
   * @remarks
   * The right margin. This parameter takes effect only when Mode is set to top-right or bottom-right.
   * 
   * @example
   * 0
   */
  right?: number;
  /**
   * @remarks
   * The top margin. This parameter takes effect only when Mode is set to top-left or top-right.
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
   * The clockwise rotation angle of the text watermark. Valid values: 0 to 360.
   * 
   * @example
   * 30
   */
  angle?: number;
  /**
   * @remarks
   * The font color of the text watermark. The value must be in the 0xFFFFFF or #FFFFFF RGB color format. For example, 0x000000 or #000000 indicates black.
   * 
   * @example
   * #FF0000
   */
  fontColor?: string;
  /**
   * @remarks
   * The font size of the text watermark. A larger value indicates a larger font size.
   * 
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @remarks
   * The margin of the text watermark. This parameter takes effect only when Mode is set to top-left, top-right, bottom-left, or bottom-right.
   */
  margin?: CreateWmEmbedTaskRequestImageControlTextVisibleControlMargin;
  /**
   * @remarks
   * The display mode of the text watermark. Valid values:
   * - **pos**: Fixed position mode.
   * - **repeat**: Tiled mode.
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
   * The opacity of the text watermark. Valid values: 1 to 255. A larger value indicates lower transparency.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * The horizontal anchor point of the text watermark. Valid values: 0 to 1. If PosAx and PosAy are both set to 0, the top-left corner of the text is used as the anchor point. If the value is 0.5, the center of the text is used as the anchor point. If PosAx and PosAy are both set to 1, the bottom-right corner of the text is used as the anchor point.
   * 
   * @example
   * 0
   */
  posAx?: number;
  /**
   * @remarks
   * The vertical anchor point of the text watermark. Valid values: 0 to 1. If PosAx and PosAy are both set to 0, the top-left corner of the text is used as the anchor point. If the value is 0.5, the center of the text is used as the anchor point. If PosAx and PosAy are both set to 1, the bottom-right corner of the text is used as the anchor point.
   * 
   * @example
   * 0
   */
  posAy?: number;
  /**
   * @remarks
   * The horizontal position of the text watermark. This parameter takes effect only when Mode is set to pos. The value is the pixel position with the top-left corner as the origin.
   * 
   * @example
   * 0
   */
  posX?: number;
  /**
   * @remarks
   * The vertical position of the text watermark. This parameter takes effect only when Mode is set to pos. The value is the pixel position with the top-left corner as the origin.
   * 
   * @example
   * 0
   */
  posY?: number;
  /**
   * @remarks
   * The horizontal spacing of the tiled text watermark. This parameter takes effect only when Mode is set to repeat.
   * 
   * @example
   * 30
   */
  spaceX?: number;
  /**
   * @remarks
   * The vertical spacing of the tiled text watermark. This parameter takes effect only when Mode is set to repeat.
   * 
   * @example
   * 0
   */
  spaceY?: number;
  /**
   * @remarks
   * Specifies whether the text watermark is visible. Valid values:
   * - true: Visible.
   * - false: Invisible.
   * 
   * @example
   * true
   */
  visible?: boolean;
  /**
   * @remarks
   * The text watermark content. The value must be a UTF-8 string.
   * 
   * @example
   * Watermark text
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
   * The logo watermark control parameters.
   */
  logoVisibleControl?: CreateWmEmbedTaskRequestImageControlLogoVisibleControl;
  /**
   * @remarks
   * The metadata control parameters. This parameter takes effect only when WmType is set to PureImage or AigcImage.
   */
  metadataControl?: CreateWmEmbedTaskRequestImageControlMetadataControl;
  /**
   * @remarks
   * The text watermark control parameters for images.
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
   * Specifies whether to enable the metadata. Valid values:
   * - **false**: Disabled.
   * - **true**: Enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The Base64-encoded metadata. You must encode a string in the format of AIGC={"Label":"1","ContentProducer":"AXXXX","ProduceID":"BXXXX","ReservedCode1":"CXXX","ContentPropagator":"DXXX","PropagateID":"EXXX","ReservedCode2":"FXXXX"} into a Base64 string. Note: 1. The "AIGC=" prefix is required. Otherwise, the metadata cannot be added. Note that the prefix is different from that of image metadata. 2. The Base64 string must be in the standard format and include padding.
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
   * The bottom margin. This parameter takes effect only when Mode is set to bottom-left or bottom-right.
   * 
   * @example
   * 10
   */
  bottom?: number;
  /**
   * @remarks
   * The right margin. This parameter takes effect only when Mode is set to top-right or bottom-right.
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
   * The font color of the text watermark. The value must be in the 0xFFFFFF or #FFFFFF RGB color format.
   * 
   * @example
   * #FF0000
   */
  fontColor?: string;
  /**
   * @remarks
   * The font size. Valid values: **0** to **72**.
   * 
   * @example
   * 30
   */
  fontSize?: number;
  /**
   * @remarks
   * The margin of the text watermark. This parameter takes effect only when Mode is set to top-left, top-right, bottom-left, or bottom-right.
   */
  margin?: CreateWmEmbedTaskRequestVideoControlTextVisibleControlMargin;
  /**
   * @remarks
   * The display mode of the text watermark. Valid values:
   * - **pos**: Fixed position mode, with the top-left corner as the origin.
   * - **bottom-right**: Bottom-right mode.
   * 
   * @example
   * bottom-right
   */
  mode?: string;
  /**
   * @remarks
   * The opacity of the text watermark. Valid values: 1 to 255. A larger value indicates lower transparency.
   * 
   * @example
   * 255
   */
  opacity?: number;
  /**
   * @remarks
   * The horizontal position of the visible watermark. This parameter takes effect only when Mode is set to pos. The value is the pixel position with the top-left corner as the origin.
   * 
   * @example
   * 10
   */
  posX?: number;
  /**
   * @remarks
   * The vertical position of the visible watermark. This parameter takes effect only when Mode is set to pos. The value is the pixel position with the top-left corner as the origin.
   * 
   * @example
   * 10
   */
  posY?: number;
  /**
   * @remarks
   * Specifies whether the text watermark is visible. Valid values:
   * - true: Visible.
   * - false: Invisible.
   * 
   * @example
   * True
   */
  visible?: boolean;
  /**
   * @remarks
   * The text watermark content. The value must be a UTF-8 string.
   * 
   * @example
   * Watermark test
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
   * The metadata control parameters.
   */
  metadataControl?: CreateWmEmbedTaskRequestVideoControlMetadataControl;
  /**
   * @remarks
   * The text watermark control parameters for videos.
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
   * The audio control parameters.
   */
  audioControl?: CreateWmEmbedTaskRequestAudioControl;
  /**
   * @remarks
   * The CSV watermark embedding control parameters.
   */
  csvControl?: CreateWmEmbedTaskRequestCsvControl;
  /**
   * @remarks
   * The document watermark control parameters.
   */
  documentControl?: CreateWmEmbedTaskRequestDocumentControl;
  /**
   * @remarks
   * The active URL for downloading the file to be embedded. The URL must support public network access.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/abc****.pdf
   */
  fileUrl?: string;
  /**
   * @remarks
   * The file name of the file to be embedded. The backend determines and verifies the file type based on the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * abc****.pdf
   */
  filename?: string;
  /**
   * @remarks
   * The image watermark control parameters.
   */
  imageControl?: CreateWmEmbedTaskRequestImageControl;
  /**
   * @remarks
   * The image watermark parameter that specifies the expected JPEG compression quality factor of the output image. Default value: 95. Valid values: 1 to 100.
   * 
   * @example
   * 95
   */
  imageEmbedJpegQuality?: number;
  /**
   * @remarks
   * The image watermark parameter that specifies the embedding level. A larger value indicates higher robustness but lower visual quality. Default value: 2. Valid values: 0 to 4.
   * 
   * @example
   * 2
   */
  imageEmbedLevel?: number;
  /**
   * @remarks
   * Specifies whether to enable invisible watermark embedding. Default value: true. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   */
  invisibleEnable?: boolean;
  /**
   * @remarks
   * The short video watermark parameter that specifies the video bitrate. By default, the system automatically obtains the video bitrate. You can use this parameter to force the bitrate used during extraction. Typically, you do not need to set this parameter.
   * 
   * @example
   * 3000k
   */
  videoBitrate?: string;
  /**
   * @remarks
   * The video control parameters.
   */
  videoControl?: CreateWmEmbedTaskRequestVideoControl;
  /**
   * @remarks
   * The video watermark parameter that specifies whether to use the long video watermark SDK. Default value: false. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  videoIsLong?: boolean;
  /**
   * @remarks
   * The watermark information in Base64-encoded string format. If you set this parameter, you cannot set WmInfoUint.
   * 
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  /**
   * @remarks
   * The capacity bit width of the watermark information. Default value: 32. This parameter must be consistent during embedding and extraction. For example, if a 40-bit SDK is used for embedding, you must also set this value to 40 for extraction.
   * 
   * @example
   * 32
   */
  wmInfoSize?: number;
  /**
   * @remarks
   * The watermark information in decimal numeric format. If you set this parameter, you cannot set WmInfoBytesB64.
   * 
   * The valid value range depends on the WmInfoSize parameter:
   * 
   * - When WmInfoSize is 32, the valid values are 1 to 4294967295.
   * 
   * - When WmInfoSize is 40, the valid values are 1 to 1099511627775.
   * 
   * - When WmInfoSize is 64, the valid values are 1 to 18446744073709551615.
   * 
   * @example
   * 123***
   */
  wmInfoUint?: string;
  /**
   * @remarks
   * The watermark type. Valid values:
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


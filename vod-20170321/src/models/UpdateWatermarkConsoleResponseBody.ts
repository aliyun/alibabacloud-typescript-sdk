// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWatermarkConsoleResponseBodyWatermark extends $dara.Model {
  createTime?: number;
  height?: string;
  horizontalOffset?: string;
  isDefault?: string;
  name?: string;
  position?: string;
  screenMode?: string;
  url?: string;
  verticalOffset?: string;
  videoHeight?: number;
  videoWidth?: number;
  watermarkId?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      height: 'Height',
      horizontalOffset: 'HorizontalOffset',
      isDefault: 'IsDefault',
      name: 'Name',
      position: 'Position',
      screenMode: 'ScreenMode',
      url: 'Url',
      verticalOffset: 'VerticalOffset',
      videoHeight: 'VideoHeight',
      videoWidth: 'VideoWidth',
      watermarkId: 'WatermarkId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      height: 'string',
      horizontalOffset: 'string',
      isDefault: 'string',
      name: 'string',
      position: 'string',
      screenMode: 'string',
      url: 'string',
      verticalOffset: 'string',
      videoHeight: 'number',
      videoWidth: 'number',
      watermarkId: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWatermarkConsoleResponseBodyWatermarkInfo extends $dara.Model {
  creationTime?: string;
  fileUrl?: string;
  isDefault?: string;
  name?: string;
  screenHeight?: number;
  screenWidth?: number;
  type?: string;
  watermarkConfig?: string;
  watermarkId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      fileUrl: 'FileUrl',
      isDefault: 'IsDefault',
      name: 'Name',
      screenHeight: 'ScreenHeight',
      screenWidth: 'ScreenWidth',
      type: 'Type',
      watermarkConfig: 'WatermarkConfig',
      watermarkId: 'WatermarkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      fileUrl: 'string',
      isDefault: 'string',
      name: 'string',
      screenHeight: 'number',
      screenWidth: 'number',
      type: 'string',
      watermarkConfig: 'string',
      watermarkId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWatermarkConsoleResponseBody extends $dara.Model {
  requestId?: string;
  watermark?: UpdateWatermarkConsoleResponseBodyWatermark;
  watermarkInfo?: UpdateWatermarkConsoleResponseBodyWatermarkInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      watermark: 'Watermark',
      watermarkInfo: 'WatermarkInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      watermark: UpdateWatermarkConsoleResponseBodyWatermark,
      watermarkInfo: UpdateWatermarkConsoleResponseBodyWatermarkInfo,
    };
  }

  validate() {
    if(this.watermark && typeof (this.watermark as any).validate === 'function') {
      (this.watermark as any).validate();
    }
    if(this.watermarkInfo && typeof (this.watermarkInfo as any).validate === 'function') {
      (this.watermarkInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


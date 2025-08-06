// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWatermarksConsoleResponseBodyWatermarkInfosWatermarkInfo extends $dara.Model {
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

export class GetWatermarksConsoleResponseBodyWatermarkInfos extends $dara.Model {
  watermarkInfo?: GetWatermarksConsoleResponseBodyWatermarkInfosWatermarkInfo[];
  static names(): { [key: string]: string } {
    return {
      watermarkInfo: 'WatermarkInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermarkInfo: { 'type': 'array', 'itemType': GetWatermarksConsoleResponseBodyWatermarkInfosWatermarkInfo },
    };
  }

  validate() {
    if(Array.isArray(this.watermarkInfo)) {
      $dara.Model.validateArray(this.watermarkInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWatermarksConsoleResponseBodyWatermarksWatermark extends $dara.Model {
  active?: string;
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
      active: 'Active',
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
      active: 'string',
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

export class GetWatermarksConsoleResponseBodyWatermarks extends $dara.Model {
  watermark?: GetWatermarksConsoleResponseBodyWatermarksWatermark[];
  static names(): { [key: string]: string } {
    return {
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      watermark: { 'type': 'array', 'itemType': GetWatermarksConsoleResponseBodyWatermarksWatermark },
    };
  }

  validate() {
    if(Array.isArray(this.watermark)) {
      $dara.Model.validateArray(this.watermark);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWatermarksConsoleResponseBody extends $dara.Model {
  requestId?: string;
  watermarkInfos?: GetWatermarksConsoleResponseBodyWatermarkInfos;
  watermarks?: GetWatermarksConsoleResponseBodyWatermarks;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      watermarkInfos: 'WatermarkInfos',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      watermarkInfos: GetWatermarksConsoleResponseBodyWatermarkInfos,
      watermarks: GetWatermarksConsoleResponseBodyWatermarks,
    };
  }

  validate() {
    if(this.watermarkInfos && typeof (this.watermarkInfos as any).validate === 'function') {
      (this.watermarkInfos as any).validate();
    }
    if(this.watermarks && typeof (this.watermarks as any).validate === 'function') {
      (this.watermarks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


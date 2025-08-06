// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWatermarkConsoleRequest extends $dara.Model {
  bucket?: string;
  fileName?: string;
  height?: string;
  horizontalOffet?: string;
  horizontalOffset?: string;
  name?: string;
  object?: string;
  ownerId?: number;
  position?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceRealOwnerId?: number;
  screenMode?: string;
  type?: string;
  verticalOffset?: string;
  videoHeight?: number;
  videoWidth?: number;
  watermarkConfig?: string;
  watermarkId?: string;
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      fileName: 'FileName',
      height: 'Height',
      horizontalOffet: 'HorizontalOffet',
      horizontalOffset: 'HorizontalOffset',
      name: 'Name',
      object: 'Object',
      ownerId: 'OwnerId',
      position: 'Position',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      screenMode: 'ScreenMode',
      type: 'Type',
      verticalOffset: 'VerticalOffset',
      videoHeight: 'VideoHeight',
      videoWidth: 'VideoWidth',
      watermarkConfig: 'WatermarkConfig',
      watermarkId: 'WatermarkId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      fileName: 'string',
      height: 'string',
      horizontalOffet: 'string',
      horizontalOffset: 'string',
      name: 'string',
      object: 'string',
      ownerId: 'number',
      position: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceRealOwnerId: 'number',
      screenMode: 'string',
      type: 'string',
      verticalOffset: 'string',
      videoHeight: 'number',
      videoWidth: 'number',
      watermarkConfig: 'string',
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


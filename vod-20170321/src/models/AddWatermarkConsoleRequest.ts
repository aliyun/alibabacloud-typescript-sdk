// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWatermarkConsoleRequest extends $dara.Model {
  active?: string;
  bucket?: string;
  fileName?: string;
  height?: string;
  horizontalOffet?: string;
  horizontalOffset?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
  width?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
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
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'string',
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


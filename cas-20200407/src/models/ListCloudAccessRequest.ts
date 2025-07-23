// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud service provider. Set the value to **Tencent**, which indicates Tencent Cloud.
   * 
   * @example
   * Tencent
   */
  cloudName?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The AccessKey ID that is used to access cloud resources.
   * 
   * @example
   * 276
   */
  secretId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: **10**, **20**, and **50**.
   * 
   * @example
   * 20
   */
  showSize?: number;
  static names(): { [key: string]: string } {
    return {
      cloudName: 'CloudName',
      currentPage: 'CurrentPage',
      secretId: 'SecretId',
      showSize: 'ShowSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudName: 'string',
      currentPage: 'number',
      secretId: 'string',
      showSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


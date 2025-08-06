// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveAppResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The resource ID. You can specify a maximum of 20 IDs at a time. Separate multiple IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 9afb4****06de180880e,f7bba****caa546cfe2ba
   */
  resourceIds?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   **video**: video files.
   * *   **image**: image files.
   * *   **attached**: auxiliary media assets.
   * 
   * This parameter is required.
   * 
   * @example
   * video
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the application to which resources are migrated. Default value: **app-1000000**. For more information, see [Use the multi-application service](https://help.aliyun.com/document_detail/113600.html).
   * 
   * This parameter is required.
   * 
   * @example
   * app-****
   */
  targetAppId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      targetAppId: 'TargetAppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: 'string',
      resourceType: 'string',
      targetAppId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


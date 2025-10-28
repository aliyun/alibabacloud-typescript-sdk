// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserDefineRegionRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the custom namespace. You can call the ListUserDefineRegion operation to query the ID. For more information, see [ListUserDefineRegion](https://help.aliyun.com/document_detail/149377.html).
   * 
   * @example
   * 2564
   */
  id?: number;
  /**
   * @remarks
   * The tag of the custom namespace.
   * 
   * @example
   * regiontag
   */
  regionTag?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionTag: 'RegionTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      regionTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


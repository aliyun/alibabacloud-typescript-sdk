// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of rows per page in a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The skill channel.
   * 
   * This parameter is required.
   * 
   * @example
   * BUSINESS
   */
  skillChannel?: string;
  /**
   * @remarks
   * The list of skill IDs.
   */
  skillIds?: string[];
  /**
   * @remarks
   * The supply type.
   * 
   * @example
   * WUYING
   */
  supplierType?: string;
  /**
   * @remarks
   * TagCodes
   */
  tagCodes?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillChannel: 'SkillChannel',
      skillIds: 'SkillIds',
      supplierType: 'SupplierType',
      tagCodes: 'TagCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      skillChannel: 'string',
      skillIds: { 'type': 'array', 'itemType': 'string' },
      supplierType: 'string',
      tagCodes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.skillIds)) {
      $dara.Model.validateArray(this.skillIds);
    }
    if(Array.isArray(this.tagCodes)) {
      $dara.Model.validateArray(this.tagCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


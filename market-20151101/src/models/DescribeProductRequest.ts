// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductRequest extends $dara.Model {
  /**
   * @remarks
   * AliUid
   * 
   * @example
   * 190********569
   */
  aliUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cmjj01**45
   */
  code?: string;
  /**
   * @example
   * false
   */
  queryDraft?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      code: 'Code',
      queryDraft: 'QueryDraft',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      code: 'string',
      queryDraft: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


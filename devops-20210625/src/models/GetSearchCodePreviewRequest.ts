// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSearchCodePreviewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60d54f3daccf2bbd6659f3ad/gitlabhq/master/config/environments/test.rb
   */
  docId?: string;
  /**
   * @example
   * false
   */
  isDsl?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 627475075b46541dd2ff01bc
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      docId: 'docId',
      isDsl: 'isDsl',
      keyword: 'keyword',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docId: 'string',
      isDsl: 'boolean',
      keyword: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillReferencesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. If not specified, the default value on the server is used.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The reference selector type used for filtering. Valid values: LABEL and VERSION.
   * 
   * @example
   * LABEL
   */
  selectorType?: string;
  /**
   * @remarks
   * The reference selector value used for filtering. Valid values: latest, a named label, HEAD, or a specific version.
   * 
   * @example
   * HEAD
   */
  selectorValue?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      selectorType: 'selectorType',
      selectorValue: 'selectorValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      selectorType: 'string',
      selectorValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillReferencesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number, starting from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. If this parameter is not specified, the server-side default value is used.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters results by reference selector type. Valid values: LABEL and VERSION.
   * 
   * @example
   * LABEL
   */
  selectorType?: string;
  /**
   * @remarks
   * Filters results by reference selector value, such as latest, a named label, HEAD, or a specific version.
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


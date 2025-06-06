// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAllSwimmingLaneRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * This parameter is required.
   * 
   * @example
   * 186
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the MSE namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      groupId: 'GroupId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      groupId: 'number',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


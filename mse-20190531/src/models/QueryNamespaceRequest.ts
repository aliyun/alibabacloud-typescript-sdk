// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want the results to be displayed. Valid values: zh (default): Chinese. en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The name of the namespace that you want to query.
   * 
   * @example
   * default
   */
  name?: string;
  /**
   * @remarks
   * The region to which the namespace belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      name: 'Name',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      name: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


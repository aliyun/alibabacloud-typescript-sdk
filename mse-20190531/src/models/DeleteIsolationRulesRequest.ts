// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIsolationRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the response is displayed. Valid values: zh (default): Chinese; en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * spring-cloud-a
   */
  appName?: string;
  /**
   * @remarks
   * The list of rule IDs to be deleted.
   */
  ids?: number[];
  /**
   * @remarks
   * The microservice namespace to which the application belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appName: 'AppName',
      ids: 'Ids',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appName: 'string',
      ids: { 'type': 'array', 'itemType': 'number' },
      namespace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


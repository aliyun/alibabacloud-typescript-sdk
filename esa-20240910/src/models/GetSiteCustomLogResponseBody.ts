// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSiteCustomLogResponseBodyLogCustomField } from "./GetSiteCustomLogResponseBodyLogCustomField";


export class GetSiteCustomLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom log field configuration.
   * 
   * @example
   * 6befa4aa-2a94-4f51-a245-295787192d2c
   */
  configId?: number;
  /**
   * @remarks
   * Indicates whether the custom configuration exists.
   * 
   * @example
   * true
   */
  isExist?: boolean;
  /**
   * @remarks
   * The custom fields.
   */
  logCustomField?: GetSiteCustomLogResponseBodyLogCustomField;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6befa4aa-2a94-4f51-a245-295787192d2c
   */
  requestId?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 167026711***
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      isExist: 'IsExist',
      logCustomField: 'LogCustomField',
      requestId: 'RequestId',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      isExist: 'boolean',
      logCustomField: GetSiteCustomLogResponseBodyLogCustomField,
      requestId: 'string',
      siteId: 'number',
    };
  }

  validate() {
    if(this.logCustomField && typeof (this.logCustomField as any).validate === 'function') {
      (this.logCustomField as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


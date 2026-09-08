// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantAppRequest extends $dara.Model {
  /**
   * @remarks
   * The application name keyword, matched by containment. If this parameter is not specified or is set to an empty string, no name-based filtering is applied. `%` can be used as a wildcard, and `_` is matched as a literal character.
   * 
   * @example
   * SampleEditor
   */
  keyName?: string;
  /**
   * @remarks
   * The page number, starting from 1. If this parameter is not specified or is set to a value less than or equal to 0, the value 1 is used.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 500. If this parameter is not specified, is set to a value less than or equal to 0, or is set to a value greater than 500, the value 20 is used.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The application source. Valid values:
   * - MARKET: marketplace applications.
   * - TENANT: applications uploaded by the current tenant.
   * 
   * If this parameter is not specified, both types of visible applications are queried.
   * 
   * @example
   * TENANT
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      keyName: 'KeyName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


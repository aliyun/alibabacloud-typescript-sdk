// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlashSmsApplicationsRequest extends $dara.Model {
  /**
   * @remarks
   * Cloud Contact Center instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Flash SMS configuration name.
   * 
   * @example
   * 闪信
   */
  name?: string;
  /**
   * @remarks
   * Page number. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size. Valid values: 1 to 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Flash SMS provider ID.
   * 
   * @example
   * Uincall
   */
  providerId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      providerId: 'ProviderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      providerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallCenterProvidersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the call center provider.
   * 
   * @example
   * xxxxxxxxx
   */
  providerId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      providerId: 'ProviderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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


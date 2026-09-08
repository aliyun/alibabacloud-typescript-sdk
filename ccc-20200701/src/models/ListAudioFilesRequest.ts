// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAudioFilesRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The paging ordinal number, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, ranging from 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Converting (transforming)<br>
   * Completed (transformation completed)<br>
   * Failed (transformation failed)<br>
   * If this parameter is not specified, resources in all statuses are queried.
   * 
   * @example
   * Completed
   */
  status?: string;
  /**
   * @remarks
   * Purpose of the audio file. The default value is General (used in scenarios such as IVR). Other optional values include HoldMusic (hold music during calls).
   * 
   * @example
   * General
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


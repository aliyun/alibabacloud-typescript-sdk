// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTensorboardResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * ds-20210126170216-xxxxxxxx
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-xxxxxxxx
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * TensorBoard ID
   * 
   * @example
   * tbxxxxxxxx
   */
  tensorboardId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      jobId: 'JobId',
      requestId: 'RequestId',
      tensorboardId: 'TensorboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      jobId: 'string',
      requestId: 'string',
      tensorboardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


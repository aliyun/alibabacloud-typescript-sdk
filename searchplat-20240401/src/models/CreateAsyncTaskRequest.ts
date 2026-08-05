// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The playground data ID.
   * 
   * @example
   * 12323
   */
  dataId?: number;
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * fae9bcc5-949f-4c31-b9b7-a273bf891699
   */
  id?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 文档解析任务
   */
  name?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * ops-document-analyze-001
   */
  serviceId?: string;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * document-analyze
   */
  serviceType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataId: 'dataId',
      id: 'id',
      name: 'name',
      serviceId: 'serviceId',
      serviceType: 'serviceType',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'number',
      id: 'string',
      name: 'string',
      serviceId: 'string',
      serviceType: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


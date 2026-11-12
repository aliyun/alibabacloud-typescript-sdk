// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FinishValidateRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID used for exact match queries. If omitted, the results are not filtered by application ID.
   * 
   * @example
   * app-0aae4rxw7ql*****
   */
  appId?: string;
  /**
   * @remarks
   * The application version ID. **Required**. It must match the application version corresponding to the AdaptorId. This parameter is not the image version ID.
   * 
   * @example
   * apv-bp1example****
   */
  appVersionId?: string;
  /**
   * @remarks
   * The verification result.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tid-bp1example****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersionId: 'AppVersionId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersionId: 'string',
      status: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


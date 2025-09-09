// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCleanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database that is scaled out.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The scale-out type. Valid values:
   * 
   * *   smooth_expand: smooth scale-out
   * *   hot_expand: hot-spot scale-out
   * 
   * This parameter is required.
   * 
   * @example
   * smooth_expand
   */
  expandType?: string;
  /**
   * @remarks
   * The job ID of the scale-out task. The value of this parameter is the same as that of the ParentJobId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the scale-out task. This parameter is returned if you send a request for the smooth scale-out task.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  parentJobId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      expandType: 'ExpandType',
      jobId: 'JobId',
      parentJobId: 'ParentJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      expandType: 'string',
      jobId: 'string',
      parentJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


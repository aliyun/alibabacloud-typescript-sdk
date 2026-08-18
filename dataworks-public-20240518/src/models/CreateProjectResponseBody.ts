// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the DataWorks workspace created by this operation.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace created by this operation.
   * Note: This field is deprecated. Use the Id field instead.
   * 
   * @example
   * 123456
   * 
   * @deprecated
   */
  projectId?: number;
  /**
   * @remarks
   * The request ID. Used for locating logs and troubleshooting issues.
   * 
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      projectId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


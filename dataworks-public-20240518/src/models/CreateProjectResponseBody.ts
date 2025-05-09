// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * The workspace ID. Note: This parameter is deprecated and is replaced by the Id parameter.
   * 
   * @example
   * 123456
   * 
   * @deprecated
   */
  projectId?: number;
  /**
   * @remarks
   * The request ID.
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


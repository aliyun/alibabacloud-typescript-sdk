// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingProjectResponseBody extends $dara.Model {
  /**
   * @example
   * project-b93ea81de76f48609eed3cd420f0399f
   */
  projectId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
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


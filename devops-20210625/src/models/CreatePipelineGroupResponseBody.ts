// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineGroupResponseBodyPipelineGroup extends $dara.Model {
  /**
   * @example
   * 111
   */
  id?: number;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineGroupResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  pipelineGroup?: CreatePipelineGroupResponseBodyPipelineGroup;
  /**
   * @example
   * ASSDS-ASSASX-XSAXSA-XSAXSAXS
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      pipelineGroup: 'pipelineGroup',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      pipelineGroup: CreatePipelineGroupResponseBodyPipelineGroup,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pipelineGroup && typeof (this.pipelineGroup as any).validate === 'function') {
      (this.pipelineGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


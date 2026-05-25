// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStageModelResponseBody extends $dara.Model {
  /**
   * @example
   * EF924FE4-2EDD-4CD3-89EC-34E4708xxxx
   */
  requestId?: string;
  /**
   * @example
   * 39sdfjsd8fudsfxxx
   */
  stageModelId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stageModelId: 'StageModelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stageModelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


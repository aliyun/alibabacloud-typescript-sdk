// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelServiceRequest extends $dara.Model {
  /**
   * @example
   * model-qwen
   */
  modelServiceName?: string;
  static names(): { [key: string]: string } {
    return {
      modelServiceName: 'modelServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelServiceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


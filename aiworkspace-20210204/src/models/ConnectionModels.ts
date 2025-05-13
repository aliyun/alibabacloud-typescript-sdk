// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ConnectionModels extends $dara.Model {
  displayName?: string;
  model?: string;
  modelType?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      model: 'Model',
      modelType: 'ModelType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      model: 'string',
      modelType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


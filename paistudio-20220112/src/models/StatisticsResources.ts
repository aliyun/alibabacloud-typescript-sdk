// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatisticsResources extends $dara.Model {
  CPU?: string;
  GPU?: string;
  hyperNodeNum?: number;
  memory?: string;
  nodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      hyperNodeNum: 'HyperNodeNum',
      memory: 'Memory',
      nodeNum: 'NodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      hyperNodeNum: 'number',
      memory: 'string',
      nodeNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


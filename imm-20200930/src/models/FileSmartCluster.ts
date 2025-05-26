// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileSmartCluster extends $dara.Model {
  similarity?: number;
  smartClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      similarity: 'Similarity',
      smartClusterId: 'SmartClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      similarity: 'number',
      smartClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


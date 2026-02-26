// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FileSmartCluster extends $dara.Model {
  /**
   * @remarks
   * Similarity
   * 
   * @example
   * 0.9
   */
  similarity?: number;
  /**
   * @remarks
   * SmartClusterId
   * 
   * @example
   * SmartCluster-12cd1645-deae-4b5e-9434-613747b75f6d
   */
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


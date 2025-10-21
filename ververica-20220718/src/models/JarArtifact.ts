// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JarArtifact extends $dara.Model {
  additionalDependencies?: string[];
  /**
   * @example
   * org.apapche.flink.test
   */
  entryClass?: string;
  /**
   * @example
   * https://oss//bucket//test.jar
   */
  jarUri?: string;
  mainArgs?: string;
  static names(): { [key: string]: string } {
    return {
      additionalDependencies: 'additionalDependencies',
      entryClass: 'entryClass',
      jarUri: 'jarUri',
      mainArgs: 'mainArgs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalDependencies: { 'type': 'array', 'itemType': 'string' },
      entryClass: 'string',
      jarUri: 'string',
      mainArgs: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalDependencies)) {
      $dara.Model.validateArray(this.additionalDependencies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


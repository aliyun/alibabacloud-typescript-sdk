// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JarArtifact extends $dara.Model {
  /**
   * @remarks
   * The full URL of the additional dependency file. You can enter the dependency file for the JAR deployment.
   */
  additionalDependencies?: string[];
  /**
   * @remarks
   * The entry class. You must enter the full name of the class.
   * 
   * @example
   * org.apapche.flink.test
   */
  entryClass?: string;
  /**
   * @remarks
   * The full URL for the JAR deployment.
   * 
   * @example
   * https://oss/bucket/test.jar
   */
  jarUri?: string;
  /**
   * @remarks
   * The parameters required by the entry class.
   * 
   * @example
   * start from main
   */
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


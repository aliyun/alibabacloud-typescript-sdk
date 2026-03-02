// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UdfClass } from "./UdfClass";


export class UdfArtifact extends $dara.Model {
  /**
   * @remarks
   * The type of the JAR file.
   * 
   * @example
   * ARTIFACT_TYPE_JAVA
   */
  artifactType?: string;
  /**
   * @remarks
   * The time when the JAR file was created.
   * 
   * @example
   * 1723532876
   */
  createdAt?: number;
  /**
   * @remarks
   * The user that creates the JAR file.
   * 
   * @example
   * userA
   */
  creator?: string;
  /**
   * @remarks
   * The list of paths in which the additional dependencies of the JAR file are stored.
   */
  dependencyJarUris?: string[];
  /**
   * @remarks
   * The path in which the JAR file is stored.
   * 
   * @example
   * oss://bucket/udfCollection.jar
   */
  jarUrl?: string;
  /**
   * @remarks
   * The time when the JAR file was modified.
   * 
   * @example
   * 1723537876
   */
  modifiedAt?: number;
  /**
   * @remarks
   * The name of the JAR file.
   * 
   * @example
   * udfCollection.jar
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The list of the class name of the JAR file.
   */
  udfClasses?: UdfClass[];
  static names(): { [key: string]: string } {
    return {
      artifactType: 'artifactType',
      createdAt: 'createdAt',
      creator: 'creator',
      dependencyJarUris: 'dependencyJarUris',
      jarUrl: 'jarUrl',
      modifiedAt: 'modifiedAt',
      name: 'name',
      namespace: 'namespace',
      udfClasses: 'udfClasses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      createdAt: 'number',
      creator: 'string',
      dependencyJarUris: { 'type': 'array', 'itemType': 'string' },
      jarUrl: 'string',
      modifiedAt: 'number',
      name: 'string',
      namespace: 'string',
      udfClasses: { 'type': 'array', 'itemType': UdfClass },
    };
  }

  validate() {
    if(Array.isArray(this.dependencyJarUris)) {
      $dara.Model.validateArray(this.dependencyJarUris);
    }
    if(Array.isArray(this.udfClasses)) {
      $dara.Model.validateArray(this.udfClasses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UdfClass } from "./UdfClass";


export class UdfArtifact extends $dara.Model {
  artifactType?: string;
  createdAt?: number;
  creator?: string;
  dependencyJarUris?: string[];
  jarUrl?: string;
  modifiedAt?: number;
  name?: string;
  namespace?: string;
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


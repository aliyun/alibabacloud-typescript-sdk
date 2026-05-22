// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeContainerAppImageSecretsResponseBodyImageSecretList extends $dara.Model {
  name?: string;
  registry?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      registry: 'Registry',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      registry: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeContainerAppImageSecretsResponseBody extends $dara.Model {
  imageSecretList?: ListEdgeContainerAppImageSecretsResponseBodyImageSecretList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageSecretList: 'ImageSecretList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageSecretList: { 'type': 'array', 'itemType': ListEdgeContainerAppImageSecretsResponseBodyImageSecretList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageSecretList)) {
      $dara.Model.validateArray(this.imageSecretList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


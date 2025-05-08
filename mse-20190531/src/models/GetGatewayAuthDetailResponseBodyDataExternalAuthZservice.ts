// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayAuthDetailResponseBodyDataExternalAuthZService extends $dara.Model {
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * httpbin-auth-service
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * K8S
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      name: 'Name',
      namespace: 'Namespace',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


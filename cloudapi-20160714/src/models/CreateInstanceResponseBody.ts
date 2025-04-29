// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * apigateway-hz-b3c5dadd5***
   */
  instanceId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * CEB6EC62-B6C7-5082-A45A-45A204724AC2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the tag exists. Valid values: **true** and **false**.
   * 
   * @example
   * True
   */
  tagStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      tagStatus: 'TagStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
      tagStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


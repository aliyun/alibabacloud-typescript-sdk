// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The data retention policy. If this parameter is not specified, the policy is unconfirmed. If the node has resources or the resource status is unknown, the operation returns a confirmation fault. Set this parameter to RETAIN to delete only the node management record and retain the cloud resources.
   */
  resourceRetentionPolicy?: string;
  static names(): { [key: string]: string } {
    return {
      resourceRetentionPolicy: 'resourceRetentionPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceRetentionPolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


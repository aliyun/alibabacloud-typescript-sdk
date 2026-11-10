// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The data retention policy for resources. If this parameter is not specified, it indicates that the deletion is not confirmed. If the node has resources or the resource status is unknown, the API returns a confirmation fault. If you set this parameter to RETAIN, only the node management record is deleted and the cloud resources are retained.
   * 
   * @example
   * RETAIN
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


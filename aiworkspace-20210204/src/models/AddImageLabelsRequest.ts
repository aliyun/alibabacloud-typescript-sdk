// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageLabelsRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the label. The following keys are supported:
   * 
   * - system.chipType
   * 
   * - system.dsw\\.cudaVersion
   * 
   * - system.dsw\\.fromImageId
   * 
   * - system.dsw\\.fromInstanceId
   * 
   * - system.dsw\\.id
   * 
   * - system.dsw\\.os
   * 
   * - system.dsw\\.osVersion
   * 
   * - system.dsw\\.resourceType
   * 
   * - system.dsw\\.rootImageId
   * 
   * - system.dsw\\.stage
   * 
   * - system.dsw\\.tag
   * 
   * - system.dsw\\.type
   * 
   * - system.framework
   * 
   * - system.origin
   * 
   * - system.pythonVersion
   * 
   * - system.source
   * 
   * - system.supported.dlc
   * 
   * - system.supported.dsw
   * 
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @remarks
   * The value of the label.
   * 
   * @example
   * GPU
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of image labels.
   * 
   * This parameter is required.
   */
  labels?: AddImageLabelsRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': AddImageLabelsRequestLabels },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


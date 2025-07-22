// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceLabelsRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the custom tag.
   * 
   * This parameter is required.
   * 
   * @example
   * customLabelKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom tag.
   * 
   * This parameter is required.
   * 
   * @example
   * labelValue
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

export class UpdateInstanceLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The tags that you want to update.
   * 
   * This parameter is required.
   */
  labels?: UpdateInstanceLabelsRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': UpdateInstanceLabelsRequestLabels },
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


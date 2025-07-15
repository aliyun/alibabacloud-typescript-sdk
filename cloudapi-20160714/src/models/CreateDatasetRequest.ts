// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatasetRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * 123
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

export class CreateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * DatasetName
   */
  datasetName?: string;
  /**
   * @remarks
   * The type of the dataset. Valid values:
   * 
   * * JWT_BLOCKING: a JSON Web Token (JWT) blacklist
   * * IP_WHITELIST_CIDR : an IP address whitelist
   * * PARAMETER_ACCESS : parameter-based access control
   * 
   * This parameter is required.
   * 
   * @example
   * JWT_BLOCKING
   */
  datasetType?: string;
  description?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tag of objects that match the rule. You can specify multiple tags.
   */
  tag?: CreateDatasetRequestTag[];
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      datasetType: 'DatasetType',
      description: 'Description',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      datasetType: 'string',
      description: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': CreateDatasetRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


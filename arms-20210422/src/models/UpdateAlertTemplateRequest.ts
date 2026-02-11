// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertTemplateRequest extends $dara.Model {
  annotations?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  labels?: string;
  matchExpressions?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rule?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  status?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      id: 'Id',
      labels: 'Labels',
      matchExpressions: 'MatchExpressions',
      message: 'Message',
      name: 'Name',
      regionId: 'RegionId',
      rule: 'Rule',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: 'string',
      id: 'number',
      labels: 'string',
      matchExpressions: 'string',
      message: 'string',
      name: 'string',
      regionId: 'string',
      rule: 'string',
      status: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


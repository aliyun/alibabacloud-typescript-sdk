// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataDiagnosisJobsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * Initializing
   */
  status?: string;
  typesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      typesShrink: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      status: 'string',
      typesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


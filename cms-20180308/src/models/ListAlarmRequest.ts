// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlarmRequest extends $dara.Model {
  /**
   * @example
   * {"instanceId":"XXX"}
   */
  dimension?: string;
  /**
   * @example
   * i-2ze3w55tr2rcpejpcfap_72071739-396b-497d-849c-59a73de44bcf
   */
  id?: string;
  /**
   * @example
   * true
   */
  isEnable?: boolean;
  name?: string;
  /**
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 2
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @example
   * ok
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      id: 'Id',
      isEnable: 'IsEnable',
      name: 'Name',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      id: 'string',
      isEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


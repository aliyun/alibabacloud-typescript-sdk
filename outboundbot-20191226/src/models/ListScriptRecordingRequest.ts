// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c209abb3-6804-4a75-b2c7-dd55c8c61b6a
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  refIdsJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d004cfd2-6a81-491c-83c6-cbe186620c95
   */
  scriptId?: string;
  search?: string;
  /**
   * @example
   * [
   *      "8"
   * ]
   */
  statesJson?: string;
  /**
   * @example
   * ["d17d5bfa-4972-4389-9718-f9602edabe48"]
   */
  uuidsJson?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      refIdsJson: 'RefIdsJson',
      scriptId: 'ScriptId',
      search: 'Search',
      statesJson: 'StatesJson',
      uuidsJson: 'UuidsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      refIdsJson: 'string',
      scriptId: 'string',
      search: 'string',
      statesJson: 'string',
      uuidsJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


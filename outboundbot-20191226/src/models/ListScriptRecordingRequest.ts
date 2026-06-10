// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptRecordingRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the recording
   * 
   * This parameter is required.
   * 
   * @example
   * c209abb3-6804-4a75-b2c7-dd55c8c61b6a
   */
  instanceId?: string;
  /**
   * @remarks
   * Page number
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Recording ID list (JSON format), same as UuidsJson
   * 
   * @example
   * ["d9fad189-760b-47b9-837f-aeabb4fc9109\\"]
   */
  refIdsJson?: string;
  /**
   * @remarks
   * Scenario ID of the recording
   * 
   * This parameter is required.
   * 
   * @example
   * d004cfd2-6a81-491c-83c6-cbe186620c95
   */
  scriptId?: string;
  /**
   * @remarks
   * Search criteria: Search by recording name or content.
   * 
   * @example
   * 您好
   */
  search?: string;
  /**
   * @remarks
   * Recording status
   * 
   * - Validating: 1
   * 
   * - Validation failed: 2
   * 
   * - Processing: 3
   * 
   * - Processing failed: 4
   * 
   * - Reviewing: 5
   * 
   * - Review failed: 6
   * 
   * - Publish failed: 7
   * 
   * - Published: 8
   * 
   * - Pending publish: 9
   * 
   * @example
   * [
   *      "8"
   * ]
   */
  statesJson?: string;
  /**
   * @remarks
   * Recording ID list
   * 
   * > This is a list of unique recording IDs. If left blank, all recordings display.
   * 
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


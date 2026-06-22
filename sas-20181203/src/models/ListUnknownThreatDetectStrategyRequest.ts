// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for a paginated query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The strategy ID.
   * 
   * @example
   * 210****
   */
  id?: string;
  /**
   * @remarks
   * The strategy name.
   * 
   * @example
   * strategy****
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The whitelist mode. Valid values:
   * 
   * - **hash**: process hash
   * 
   * - **path**: process path
   * 
   * @example
   * hash
   */
  studyMode?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      id: 'Id',
      name: 'Name',
      pageSize: 'PageSize',
      studyMode: 'StudyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      id: 'string',
      name: 'string',
      pageSize: 'string',
      studyMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeSpaceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pks-xxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeSpaceId: 'KnowledgeSpaceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeSpaceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


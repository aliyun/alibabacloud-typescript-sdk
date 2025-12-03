// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkitemV2RequestFieldValueList extends $dara.Model {
  /**
   * @example
   * 6aexxxxxa1d98c09c60xxxx16
   */
  fieldIdentifier?: string;
  /**
   * @example
   * 10
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldIdentifier: 'fieldIdentifier',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldIdentifier: 'string',
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

export class CreateWorkitemV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19xxxx31947xxxx
   */
  assignedTo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Req
   */
  category?: string;
  description?: string;
  fieldValueList?: CreateWorkitemV2RequestFieldValueList[];
  /**
   * @example
   * 11223331122
   */
  parentIdentifier?: string;
  participants?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * asd345xxxxx9q9845xxxxx34
   */
  spaceIdentifier?: string;
  /**
   * @example
   * 455532323455
   */
  sprintIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subject?: string;
  tags?: string[];
  trackers?: string[];
  /**
   * @example
   * 1561159309......
   */
  verifier?: string;
  versions?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9uy29901re573f561d69jn40
   */
  workitemTypeIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      assignedTo: 'assignedTo',
      category: 'category',
      description: 'description',
      fieldValueList: 'fieldValueList',
      parentIdentifier: 'parentIdentifier',
      participants: 'participants',
      spaceIdentifier: 'spaceIdentifier',
      sprintIdentifier: 'sprintIdentifier',
      subject: 'subject',
      tags: 'tags',
      trackers: 'trackers',
      verifier: 'verifier',
      versions: 'versions',
      workitemTypeIdentifier: 'workitemTypeIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedTo: 'string',
      category: 'string',
      description: 'string',
      fieldValueList: { 'type': 'array', 'itemType': CreateWorkitemV2RequestFieldValueList },
      parentIdentifier: 'string',
      participants: { 'type': 'array', 'itemType': 'string' },
      spaceIdentifier: 'string',
      sprintIdentifier: 'string',
      subject: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      trackers: { 'type': 'array', 'itemType': 'string' },
      verifier: 'string',
      versions: { 'type': 'array', 'itemType': 'string' },
      workitemTypeIdentifier: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fieldValueList)) {
      $dara.Model.validateArray(this.fieldValueList);
    }
    if(Array.isArray(this.participants)) {
      $dara.Model.validateArray(this.participants);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.trackers)) {
      $dara.Model.validateArray(this.trackers);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


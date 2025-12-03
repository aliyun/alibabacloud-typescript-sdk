// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAllReleaseWorkflowsResponseBodyReleaseStagesVariableGroups extends $dara.Model {
  /**
   * @example
   * dev
   */
  name?: string;
  displayName?: string;
  /**
   * @example
   * APP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      displayName: 'displayName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      displayName: 'string',
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

export class ListAllReleaseWorkflowsResponseBodyReleaseStages extends $dara.Model {
  /**
   * @example
   * testApp
   */
  appName?: string;
  name?: string;
  /**
   * @example
   * 5aa8cc67e75e41bf9dddeb708775bcc3
   */
  sn?: string;
  /**
   * @example
   * ce51b31b996246ecaf874736838360b2
   */
  releaseWorkflowSn?: string;
  /**
   * @example
   * 1
   */
  order?: string;
  variableGroups?: ListAllReleaseWorkflowsResponseBodyReleaseStagesVariableGroups[];
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      name: 'name',
      sn: 'sn',
      releaseWorkflowSn: 'releaseWorkflowSn',
      order: 'order',
      variableGroups: 'variableGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      name: 'string',
      sn: 'string',
      releaseWorkflowSn: 'string',
      order: 'string',
      variableGroups: { 'type': 'array', 'itemType': ListAllReleaseWorkflowsResponseBodyReleaseStagesVariableGroups },
    };
  }

  validate() {
    if(Array.isArray(this.variableGroups)) {
      $dara.Model.validateArray(this.variableGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllReleaseWorkflowsResponseBody extends $dara.Model {
  /**
   * @example
   * testApp
   */
  appName?: string;
  /**
   * @example
   * ce51b31b996246ecaf874736838360b2
   */
  sn?: string;
  name?: string;
  /**
   * @example
   * 1
   */
  order?: string;
  releaseStages?: ListAllReleaseWorkflowsResponseBodyReleaseStages[];
  /**
   * @example
   * ""
   */
  note?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      sn: 'sn',
      name: 'name',
      order: 'order',
      releaseStages: 'releaseStages',
      note: 'note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      sn: 'string',
      name: 'string',
      order: 'string',
      releaseStages: { 'type': 'array', 'itemType': ListAllReleaseWorkflowsResponseBodyReleaseStages },
      note: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.releaseStages)) {
      $dara.Model.validateArray(this.releaseStages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllReleaseWorkflowsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAllReleaseWorkflowsResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': ListAllReleaseWorkflowsResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


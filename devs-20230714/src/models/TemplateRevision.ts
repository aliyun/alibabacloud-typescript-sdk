// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TemplateSpec } from "./TemplateSpec";
import { TemplateRevisionStatus } from "./TemplateRevisionStatus";


export class TemplateRevision extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * It is a template revision
   */
  description?: string;
  /**
   * @example
   * TemplateRevision
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @example
   * demo-template
   */
  name?: string;
  spec?: TemplateSpec;
  status?: TemplateRevisionStatus;
  /**
   * @example
   * demo-template
   */
  templateName?: string;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      spec: 'spec',
      status: 'status',
      templateName: 'templateName',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      spec: TemplateSpec,
      status: TemplateRevisionStatus,
      templateName: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


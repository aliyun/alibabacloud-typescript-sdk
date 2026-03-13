// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RewriteConfig } from "./RewriteConfig";


export class PathConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the function.
   * 
   * This parameter is required.
   * 
   * @example
   * myFunction
   */
  functionName?: string;
  /**
   * @remarks
   * The supported methods.
   */
  methods?: string[];
  /**
   * @remarks
   * The route matching rule.
   * 
   * This parameter is required.
   * 
   * @example
   * /api/*
   */
  path?: string;
  /**
   * @remarks
   * The version or alias.
   * 
   * @example
   * myAlias
   */
  qualifier?: string;
  /**
   * @remarks
   * The rewrite configuration.
   */
  rewriteConfig?: RewriteConfig;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      methods: 'methods',
      path: 'path',
      qualifier: 'qualifier',
      rewriteConfig: 'rewriteConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      methods: { 'type': 'array', 'itemType': 'string' },
      path: 'string',
      qualifier: 'string',
      rewriteConfig: RewriteConfig,
    };
  }

  validate() {
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    if(this.rewriteConfig && typeof (this.rewriteConfig as any).validate === 'function') {
      (this.rewriteConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

